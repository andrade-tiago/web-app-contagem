const countDecimals = number => {
	if (Math.floor(number) === number) return 0;

  	return number.toString().split(".")[1].length || 0;
};

const modalConfirm = msg => {
	$modalConfirm.querySelector('[data-box-text]').innerHTML = msg;

	$modal.classList.add('active');

	const $cancelButton = $modalConfirm.querySelector('[data-cancel-button]');
	const $confirmButton = $modalConfirm.querySelector('[data-confirm-button]');

	return new Promise((resolve, reject) => {
		const cancelButtonClick = () => {
			finalize();
			resolve(false);
		};

		const confirmButtonClick = () => {
			finalize();
			resolve(true);
		};

		const finalize = () => {
			$cancelButton.removeEventListener('click', cancelButtonClick);
			$confirmButton.removeEventListener('click', confirmButtonClick);
			$modal.classList.remove('active');
		};

		$cancelButton.addEventListener('click', cancelButtonClick);
		$confirmButton.addEventListener('click', confirmButtonClick);
	});
};