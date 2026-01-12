# Email Setup Instructions

The contact form is configured to send emails to **yuliamosh.law@gmail.com** using Resend API.

## Quick Setup (5 minutes)

### Step 1: Get a Free Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Verify your email address
4. Navigate to **API Keys** in the dashboard
5. Click **Create API Key**
6. Copy the API key (starts with `re_`)

### Step 2: Add API Key to Your Project

1. Open the file `.env.local` in the project root
2. Replace `your_resend_api_key_here` with your actual API key:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

3. Save the file
4. Restart your development server:

```bash
npm run dev
```

### Step 3: Verify Email Domain (Production Only)

For production deployment on Vercel:

1. In your Resend dashboard, go to **Domains**
2. Add your domain (e.g., `yuliamoshinskybiton.com`)
3. Add the DNS records provided by Resend to your domain provider
4. Wait for verification (usually 5-10 minutes)
5. Update the `from` field in `src/app/api/contact/route.ts`:

```typescript
from: "Yulia Law <contact@yourdomain.com>",
```

### Step 4: Test the Contact Form

1. Go to http://localhost:3000
2. Scroll to the contact form
3. Fill in all fields and submit
4. Check **yuliamosh.law@gmail.com** for the email

## Alternative: Use Gmail SMTP (Not Recommended)

If you prefer to use Gmail SMTP instead of Resend:

1. Install nodemailer: `npm install nodemailer`
2. Enable "App Passwords" in your Google Account
3. Update the API route to use nodemailer

**Note**: Gmail SMTP has daily limits and may flag emails as spam. Resend is recommended for production use.

## Environment Variables

| Variable         | Description         | Required |
| ---------------- | ------------------- | -------- |
| `RESEND_API_KEY` | Your Resend API key | Yes      |

## Deployment to Vercel

When deploying to Vercel:

1. Go to your project settings on Vercel
2. Navigate to **Environment Variables**
3. Add `RESEND_API_KEY` with your API key
4. Redeploy your application

The contact form will now send real emails! 🎉

## Troubleshooting

### "Failed to send message" error

- Check that `RESEND_API_KEY` is correctly set in `.env.local`
- Restart your dev server after adding the key
- Verify the API key is valid in Resend dashboard

### Emails not arriving

- Check spam/junk folder
- Verify the recipient email (yuliamosh.law@gmail.com) is correct
- Check Resend dashboard for delivery logs

### Rate limits

- Free tier: 100 emails/day
- Upgrade to paid plan if you need more

## Contact Information

The contact form sends emails to:

- **Email**: yuliamosh.law@gmail.com
- **WhatsApp**: +972-52-306-4062

Both are displayed on the contact section of the website.
