$hamburguer.addEventListener('click', () => $menu.classList.toggle('active'));

$blockTime.addEventListener('change', () => blockTime.value = $blockTime.value);

$displayDatetime.addEventListener('click', () => datetime.isDisplay = $displayDatetime.checked);

$title.addEventListener('change', () => title.value = $title.value);

$add.addEventListener('click', () => {
	count.value++
	$add.disabled = true;

	setTimeout(() => $add.disabled = false, blockTime.value * 1000);
});