import {indexStyling} from "../scss/main.scss";

export function getIndexHtml() {
    return `<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        
        ${indexStyling}
        <title>Henning's Web-Shit</title>
    </head>
    <body>
        <div id="top" class="landing">
<!--            <video class="index_video" src="/single_shot_bw.mp4" muted loop autoplay playsinline style="opacity: 0"-->
<!--                   onplay="this.style.opacity=1;">-->
<!--            </video>-->
            <video class="index_video" src="/lars_rage_mode.mp4" playsinline muted loop style="opacity: 1"
                   onplay="this.style.opacity=1;">
            </video>
<!--            <div class="landing__header landing__header&#45;&#45;left">-->
<!--                What's up?-->
<!--            </div>-->
        </div>
        <a href="#top" class="to-top-button">Zum Seitenanfang</a>
        <div class="overflow">
            <div class="overflow__single">
                <a href="#about" class="navbar__item black">
                    <div class="item__content">
                        Lars Alt
                    </div>
                </a>
            </div>
            <div class="overflow__multiple">
                <a href="#current" class="navbar__item yellow">
                    <div class="item__content">
                        Aktuelles
                    </div>
                </a>
                <a href="#wanted" class="navbar__item red">
                    <div class="item__content">
                        Das will ich
                    </div>
                </a>
                <a href="#achieved" class="navbar__item blue">
                    <div class="item__content">
                        Das habe ich erreicht
                    </div>
                </a>
                <a href="#support" class="navbar__item green">
                    <div class="item__content">
                        So unterstützt Du mich
                    </div>
                </a>
            </div>
            <div class="content">
                <div class="content__section black" id="about">
                    <div class="section">
                        <h1>Hi, ich bin Lars!</h1>
                        <p>Ich bin 29 Jahre jung und seit neuestem als super heftige Debattierungsmaschine im niedersächsischen Landtag unterwegs.
                        </p>
                        <p>
                            Deshalb hab ich mich entschieden, von einem ebenso heftigen Tier, wie ich es selbst bin, eine sau heftige Website ins Leben rufen zu lassen.
                        </p>
                    </div>
                </div>
                <div class="content__section yellow" id="current">
                    <div class="section">
                        <h1>Aktuelles</h1>
                        <p>Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like
                            the
                            world has never seen. It’s about making placeholder text great again. That’s what people want, they
                            want
                            placeholder text to be great again.
        
                            It’s about making placeholder text great again. That’s what people want, they want placeholder text
                            to
                            be great again. I know words. I have the best words. I will write some great placeholder text – and
                            nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I
                            will
                            write some great, great text on your website’s Southern border, and I will make Google pay for that
                            text. Mark my words. He’s not a word hero. He’s a word hero because he was captured. I like text
                            that
                            wasn’t captured.
        
                            I have a 10 year old son. He has words. He is so good with these words it's unbelievable. The best
                            taco
                            bowls are made in Trump Tower Grill. I love Hispanics! Look at that text! Would anyone use that? Can
                            you
                            imagine that, the text of your next webpage?! If Trump Ipsum weren’t my own words, perhaps I’d be
                            dating
                            it.</p>
                    </div>
                </div>
                <div class="content__section red" id="wanted">
                    <div class="section">
                        <h1>Das will ich</h1>
                        <p>The other thing with Lorem Ipsum is that you have to take out its family. I was going to say
                            something
                            extremely rough to Lorem Ipsum, to its family, and I said to myself, "I can't do it. I just can't do
                            it.
                            It's inappropriate. It's not nice."
        
                            You’re disgusting.
        
                            Despite the constant negative ipsum covfefe. Look at these words. Are they small words? And he
                            referred
                            to my words - if they're small, something else must be small. I guarantee you there's no problem, I
                            guarantee. He’s not a word hero. He’s a word hero because he was captured. I like text that wasn’t
                            captured. I think the only card she has is the Lorem card.
        
                            If Trump Ipsum weren’t my own words, perhaps I’d be dating it. I'm speaking with myself, number one,
                            because I have a very good brain and I've said a lot of things.
        
                            Lorem Ispum is a choke artist. It chokes! This placeholder text is gonna be HUGE. You have so many
                            different things placeholder text has to be able to do, and I don't believe Lorem Ipsum has the
                            stamina.
                        </p>
                    </div>
                </div>
                <div class="content__section blue" id="achieved">
                    <div class="section">
                        <h1>Das habe ich erreicht</h1>
                        <p>I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It
                            could be Russia, but it could also be China. It could also be lots of other people. It also could be
                            some wordsmith sitting on their bed that weights 400 pounds. Ok? Look at these words. Are they small
                            words? And he referred to my words - if they're small, something else must be small. I guarantee you
                            there's no problem, I guarantee.
        
                            If Trump Ipsum weren’t my own words, perhaps I’d be dating it. That other text? Sadly, it’s no
                            longer a
                            10. Look at these words. Are they small words? And he referred to my words - if they're small,
                            something
                            else must be small. I guarantee you there's no problem, I guarantee. Look at these words. Are they
                            small
                            words? And he referred to my words - if they're small, something else must be small. I guarantee you
                            there's no problem, I guarantee. I think the only card she has is the Lorem card.
        
                            The other thing with Lorem Ipsum is that you have to take out its family. I think the only
                            difference
                            between me and the other placeholder text is that I’m more honest and my words are more beautiful.
                            You're telling the enemy exactly what you're going to do. No wonder you've been fighting Lorem Ipsum
                            your entire adult life. Lorem Ipsum best not make any more threats to your website. It will be met
                            with
                            fire and fury like the world has never seen.</p>
                    </div>
                </div>
                <div class="content__section green" id="support">
                    <div class="section">
                        <h1>So unterstützt du mich</h1>
                        <p>When other websites give you text, they’re not sending the best. They’re not sending you, they’re
                            sending
                            words that have lots of problems and they’re bringing those problems with us. They’re bringing
                            mistakes.
                            They’re bringing misspellings. They’re typists… And some, I assume, are good words.
        
                            I'm speaking with myself, number one, because I have a very good brain and I've said a lot of
                            things.
                            You're telling the enemy exactly what you're going to do. No wonder you've been fighting Lorem Ipsum
                            your entire adult life. We are going to make placeholder text great again. Greater than ever before.
                            Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?!
        
                            The best taco bowls are made in Trump Tower Grill. I love Hispanics! My placeholder text, I think,
                            is
                            going to end up being very good with women.
        
                            I’m the best thing that ever happened to placeholder text. It’s about making placeholder text great
                            again. That’s what people want, they want placeholder text to be great again. You could see there
                            was
                            text coming out of her eyes, text coming out of her wherever. Be careful, or I will spill the beans
                            on
                            your placeholder text.</p>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script>
            var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
            if (isSafari) {
                $(document).ready(function(){
                  // Add smooth scrolling to all links
                  $("a").on('click', function(event) {
                
                    // Make sure this.hash has a value before overriding default behavior
                    if (this.hash !== "") {
                      // Prevent default anchor click behavior
                      event.preventDefault();
                
                      // Store hash
                      var hash = this.hash;
                
                      // Using jQuery's animate() method to add smooth page scroll
                      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                      $('html, body').animate({
                        scrollTop: $(hash).offset().top
                      }, 800, function(){
                   
                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                      });
                    } // End if
                  });
                });
            }
        </script>
        <script>
            const videoElement = document.querySelector('.index_video');
            videoElement.play();
        </script>
    </body>
</html>`;
}