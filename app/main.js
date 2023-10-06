const
	$blockTime = document.getElementById('block-time'),
	$title = document.getElementById('title'),
	$count = document.getElementById('count'),
	$add = document.getElementById('add');

$title.addEventListener('change', () => title.value = $title.value);

$add.addEventListener('click', () => {
	count.value++
	$add.disabled = true;

	setTimeout(() => $add.disabled = false, blockTime.value * 1000);
});
