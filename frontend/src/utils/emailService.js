import emailjs from '@emailjs/browser';

// Service configuration
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_6o6e9kc',
    TEMPLATE_ID_NOTIFICATION: 'template_n1liike', // For YOU
    TEMPLATE_ID_AUTOREPLY: 'template_b6nlvdp',    // For SENDER
    PUBLIC_KEY: 'vLsGdN-v-S5GV3XEj',
};

export const sendEmail = async (templateParams) => {
    const results = {
        notification: { success: false, error: null },
        autoReply: { success: false, error: null }
    };

    try {
        // 1. Send Notification Email to You
        await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID_NOTIFICATION,
            templateParams,
            EMAILJS_CONFIG.PUBLIC_KEY
        )
            .then((res) => {
                results.notification.success = true;
            })
            .catch((err) => {
                console.error("Notification Failed:", err);
                results.notification.error = err;
            });

        // 2. Send Auto-Reply Email to Visitor
        await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID_AUTOREPLY,
            templateParams,
            EMAILJS_CONFIG.PUBLIC_KEY
        )
            .then((res) => {
                results.autoReply.success = true;
            })
            .catch((err) => {
                console.error("Auto-Reply Failed:", err);
                results.autoReply.error = err;
            });

        // Success if AT LEAST the notification was sent (or both)
        const overallSuccess = results.notification.success || results.autoReply.success;

        return { success: overallSuccess, results };

    } catch (error) {
        console.error('Critical EmailJS Error:', error);
        return { success: false, error };
    }
};
