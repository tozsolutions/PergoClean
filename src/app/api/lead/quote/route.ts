import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    // Send to webhook if configured
    const webhookUrl = process.env.QUOTE_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
        // Continue even if webhook fails
      }
    }

    // Log for debugging (remove in production)
    console.log('Quote request received:', data);

    // Send WhatsApp notification if configured
    const whatsappNumber = process.env.WHATSAPP_PRIMARY;
    if (whatsappNumber && data.phone) {
      // In production, integrate with WhatsApp Business API
      console.log(`Would send WhatsApp to ${data.phone}`);
    }

    // Send email notification if configured
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    if (notificationEmail) {
      // In production, integrate with email service (SendGrid, Resend, etc.)
      console.log(`Would send email to ${notificationEmail}`);
    }

    return NextResponse.json({
      success: true,
      message: 'Teklif talebiniz alındı',
    });
  } catch (error) {
    console.error('Quote API error:', error);
    return NextResponse.json(
      { success: false, message: 'Bir hata oluştu' },
      { status: 500 }
    );
  }
}
