const
	$blockTime = document.getElementById('block-time'),
	$title = document.getElementById('title'),
	$count = document.getElementById('count'),
	$add = document.getElementById('add'),
	$hamburguer = document.getElementById('hamburguer'),
	$menu = document.getElementById('menu');

$hamburguer.addEventListener('click', () => $menu.classList.toggle('active'));

$blockTime.addEventListener('change', () => blockTime.value = $blockTime.value);

$title.addEventListener('change', () => title.value = $title.value);

$add.addEventListener('click', () => {
	count.value++
	$add.disabled = true;

	setTimeout(() => $add.disabled = false, parseInt(blockTime.value * 1000));
});