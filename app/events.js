$hamburguer.addEventListener('click', () => $menu.classList.toggle('active'));

$blockTime.addEventListener('change', () => blockTime.value = $blockTime.value);

$displayDatetime.addEventListener('click', () => datetime.isDisplay = $displayDatetime.checked);

$title.addEventListener('change', () => title.value = $title.value);

$add.addEventListener('click', () => {
	if (blockTime.value) {
		$add.disabled = true;

		setTimeout(() => $add.disabled = false, blockTime.value * 1000);
	}

	count.value++
});

$resetCount.addEventListener('click', () => {
	if (confirm('Tem certeza que deseja zerar a contagem? A ação não poderá ser desfeita.')) {
		count.value = 0;
	}
});