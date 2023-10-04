const
    $blockTime = document.getElementById('block-time'),
    $title = document.getElementById('title');


let
    blockTime = JSON.parse(localStorage.getItem('blockTime')) || 5,
    title = JSON.parse(localStorage.getItem('title'));

$blockTime.value = blockTime;
$title.value = title;
