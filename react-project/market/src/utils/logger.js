const API_LOGGING_URL = 'http://backend-domain.com/api/logs';


export const logEvent = async (level, message, metadata = {}) => {
    const log = {
        timestamp: new Date().toISOString(),
        level,
        message,
        metadata,
    };

    try {
        // Отправка лога на сервер
        await fetch(API_LOGGING_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(log),
        });
        console.log('Log sent:', log);
    } catch (error) {
        console.error('Failed to send log:', error);
    }
};
