import { logEvent } from './logger';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({}),
    })
);

test('logEvent sends log with correct structure', async () => {
    const log = { level: 'info', message: 'Test log', metadata: {} };
    await logEvent(log.level, log.message, log.metadata);

    expect(fetch).toHaveBeenCalledWith(expect.any(String), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.any(String),
    });

    const body = JSON.parse(fetch.mock.calls[0][1].body);
    expect(body.level).toBe('info');
    expect(body.message).toBe('Test log');
    expect(body.metadata).toEqual({});
});
