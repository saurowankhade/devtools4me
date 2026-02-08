import Network from "./network.js";

const AUTOSEND_ADD_CONTACT_URL = `https://api.autosend.com/v1/contacts/bulk-add/list/`;

const { AUTOSEND_API_KEY, AUTOSEND_LIST_ID } = process.env;

const ContactsService = {
	bulkAddEmails: async ({ emails }) => {
		if (!emails || !Array.isArray(emails) || emails.length === 0) {
			throw new Error('Please add correct email address.');
		}

		// Format contacts according to AutoSend API requirements
		const contacts = emails.map((email) => ({
			email: email.toLowerCase().trim(),
			customFields: {
				subscribedAt: new Date().toISOString(),
				source: 'website-newsletter',
			},
		}));

		const response = await Network.call({
			method: 'POST',
			url: `${AUTOSEND_ADD_CONTACT_URL}${AUTOSEND_LIST_ID}`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${AUTOSEND_API_KEY}`,
			},
			body: {
				contacts,
			},
		});

		return response;
	},
};

export default ContactsService;
