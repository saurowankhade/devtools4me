import ContactsService from "@/lib/contacts";

const handler = async (req, res) => {
	if (req.method !== 'POST') {
		return res.status(405).send({
			success: false,
			error: { message: 'Method not allowed' },
		});
	}

	const { email } = req.body;

	try {
		if (!email) {
			return res.status(400).send({
				success: false,
				error: { message: "Please check your input and try again" },
			});
		}

		const response = await ContactsService.bulkAddEmails({
			emails: [email],
		});

		return res.send({
			success: true,
			data: response,
		});
	} catch (error) {
		const errorMessage =
			error?.data?.error?.message ||
			error?.message ||
			'Server error occurred';

		console.log('[Newsletter subscribe] error : ', errorMessage);

		return res.status(error?.status || 500).send({
			success: false,
			error: {
				message: 'Unable to subscribe at this time. Please try again later.',
			},
		});
	}
};

export default handler;
