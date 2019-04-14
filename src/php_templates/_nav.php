<nav class="navigation">
    <ul class="navigation__list">
        <? foreach ($data['navigation'] as $nav_item): ?>
               <li class="navigation__list-item 
                   <? if ($nav_item['css_modifier']) echo 'navigation__list-item_'.$nav_item['css_modifier'] ?> ">
                   <a class="navigation__link" href="<?= $nav_item['url']; ?>"><?= $nav_item['text']; ?></a>
                </li>
        <? endforeach; ?>
    </ul>
</nav>