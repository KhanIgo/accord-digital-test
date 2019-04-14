<? if(is_array($data['advantages'])): ?>
<div class="advantages">
   <? foreach ($data['advantages'] as $adv): ?>
        <div class="advantages__item">
           <i class="advantages__icon-wrpr advantages__icon-wrpr_<?= $adv['css_modifier']; ?>">
               <img class="advantages__icon" data-src="<?= $adv['icon_url']; ?>" alt="" role="presentation" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></i>
            <p class="advantages__text"><?= $adv['text']; ?></p>
        </div>
    <? endforeach; ?>
</div>
<? endif; ?>