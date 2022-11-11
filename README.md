# NestJS React Emails Example

Example how to render localized email templates with react in a nestjs module.

## Usage
You can run it with docker-compose.

```docker-compose up server```

This will bring up the NestJS app at `http://localhost:3214` and a mock mail server at `http://localhost:1025`.

Now you can look at a rendered email in your browser at `http://localhost:3214/welcome/de/show` and `http://localhost:3214/welcome/en/show`.

If you navigate to `http://localhost:3214/welcome/en` you can send a test email to the mock mail server.

You can access the inbox of the mock mail server at `http://localhost:8025`.
