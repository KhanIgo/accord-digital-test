<section class="main row">
    <div class="main__container container">
        <div class="main__photo-and-sub">
            <div class="main__photo-wrpr"><img class="main__photo" data-src="images/Pack.png" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="" role="presentation" /><img class="main__shadow" data-src="images/shadow.png" alt="" role="presentation" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><img class="main__plants-1" data-src="images/plants-1.png" alt="" role="presentation" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><img class="main__plants-2" data-src="images/plants-2.png" alt="" role="presentation" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /> </div>
            <div class="main__sub">
                <p>
                    <?= $data['description_text']; ?>
                </p>
            </div>
        </div>
        <div class="main-desc">
            <div class="main-desc__title">
                <h1><?= $data['header']; ?></h1> </div>
            <div class="main-desc__subtitle">
                <p>
                    <?= $data['sub_header']; ?>
                </p>
            </div>
            <? include '_advantages.php'; ?>
        </div>
    </div>
</section>