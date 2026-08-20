import type { HandleServerError } from '@sveltejs/kit';
import { telemetry } from '$lib/server/telemetry';

export const handleError: HandleServerError = async ({ status }) => {
	await telemetry.event({ type: 'server.error', level: 'error', payload: { status } }).catch(() => undefined);
	return { message: 'An unexpected error occurred' };
};
