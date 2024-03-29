const newFormHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('#post-title').value.trim();

	const description = document.querySelector('#post-content').value.trim();

	if (title && description) {
		const response = await fetch(`/api/posts`, {
			method: 'POST',
			body: JSON.stringify({ title, description }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to create post');
		}
	}
};

const delButtonHandler = async (event) => {
	if (event.target.hasAttribute('data-id')) {
		const id = event.target.getAttribute('data-id');

		const response = await fetch(`/api/posts/${id}`, {
			method: 'DELETE',
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to delete blog');
		}
	}
};

document
	.querySelector('.new-blog-form')
	.addEventListener('submit', newFormHandler);

document
	.querySelector('.blog-list')
	.addEventListener('click', delButtonHandler);