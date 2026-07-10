<?php
// Contact form endpoint for Hostinger shared hosting (PHP mail()).
// Receives JSON POST from the React form and emails the lead to the company inbox.

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'invalid_json']);
    exit;
}

// Honeypot: bots fill hidden fields, humans don't.
if (!empty($data['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$name    = trim($data['name'] ?? '');
$email   = trim($data['email'] ?? '');
$phone   = trim($data['phone'] ?? '');
$service = trim($data['service'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || $phone === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'validation']);
    exit;
}

// Cap lengths to keep the mail sane.
$name    = mb_substr($name, 0, 200);
$phone   = mb_substr($phone, 0, 50);
$service = mb_substr($service, 0, 200);
$message = mb_substr($message, 0, 5000);

// Strip CR/LF from header-bound values to block header injection.
$safe = fn(string $v): string => str_replace(["\r", "\n"], ' ', $v);

$to      = 'info@arvanitisconstruction.gr';
$subject = 'Νέο αίτημα προσφοράς — ' . $safe($name);

$body = "Όνομα: {$name}\n"
      . "Email: {$email}\n"
      . "Τηλέφωνο: {$phone}\n"
      . "Υπηρεσία: {$service}\n\n"
      . "Μήνυμα:\n{$message}\n\n"
      . "— Στάλθηκε από τη φόρμα του arvanitisconstruction.gr\n"
      . 'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown');

// From must be a domain mailbox for Hostinger's mail() to deliver reliably;
// Reply-To carries the visitor's address so replies go to them.
$headers = 'From: Arvanitis Construction <no-reply@arvanitisconstruction.gr>' . "\r\n"
         . 'Reply-To: ' . $safe($name) . ' <' . $safe($email) . '>' . "\r\n"
         . 'MIME-Version: 1.0' . "\r\n"
         . 'Content-Type: text/plain; charset=UTF-8' . "\r\n"
         . 'Content-Transfer-Encoding: 8bit';

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

if (mail($to, $encodedSubject, $body, $headers)) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'mail_failed']);
}
