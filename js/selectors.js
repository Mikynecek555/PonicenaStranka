/* Speciální funkce, do níž se vkládá kód využívající knihovnu jQuery.
 * Je provedena ve chvíli, kdy je načten a připraven ("ready") celý dokument - tedy HTML stránka.
 * Pokud jste lenivější jako já, můžete používat zkrácenou formu $(function(){ //zde bude kód v jQuery }).
 */
/*   $(document).ready(function(){
        // zde bude kód v jQuery
     });
*/
$(function(){
    /* Syntax jQuery začíná typicky znakem $. Ten nahrazuje původní delší zápis pomocí identifikátoru jQuery 
     * Obojí stále funguje (viz níže), delší zápis už však nepoužívají ani masochisté :-)
     */
    /* Následující dva řádky dělají totéž - skrývají záhlaví stránky. Akce trvá 1000 ms (1 sekundu).  */
    // jQuery("header").hide(1000);
    // $("header").hide(1000);
    /* Po provedení tohoto řádku se záhlaví opět objeví, ale tentokrát pomaleji... */
    // $("header").show(2000);

    /* Možná už tušíte, že to, co je za dolarem v závorce, je tzv. selektor. Selektory byste už měli dobře znát z CSS. 
     * Stačí je jen správně používat a můžete pomocí jQuery podobně lehce manipulovat s jakýmkoliv prvkem na stránce:
     */
    /* Takto například se všemi nadpisy. Používáme k tomu tzv. hromadný selektor. Metoda text() v jQuery provede totéž
     * jako innerText() v čistém JS - nahradí obsah v určitém elementu.
     */
    // $("h1, h2, h3, h4, h5, h6").text("To jsem to krásně podělal");

    /* Funguje samozřejmě i tzv. kontextový selektor. V tomto příkladu provedu úpravu jen těcht napisů h2, 
     * které jsou součástí značky aside. Metoda html() odpovídá metodě innerHTML() v čistém JS:
    */
    // $("aside h2").html("Jen kousek nadpisu bude <i>nakloněný</i>");

    /* Můžete pochopitelně manipulovat i s jakýmkoliv prvkem označeným id, když správně použijete hashtag. 
     * Mou obětí je tentokrát sekce #uvod. Pomocí funkce css() můžu měnit styly oběti mnohem rychleji, než tomu je v čistém JS.
     * Je však třeba dodržet správný zápis:
     */
    // $("#uvod").css({"background-color":"yellow", "border":"5px solid black", "font-size":"2em"});
    
    /* Podobně zošklivit lze i kteroukoliv třídu (pochopitelně s čestnou výjimkou té vaší). 
     * Jistě si vzpomínáte, že správný třídní selektor je tečka:  
     */
    // $(".poznamka").css({"background-color":"pink", "color":"white", "font-size":"0.5em"});    

    /* Účinně selektovat je možné i prostřednictvím atributů prvků, a to když se použijí hranaté závorky.
     * Není nadto mít na stránce škaredě orámované a odsazené obrázky, že?
     */
    // $("[alt]").css({"border":"10px dotted black", "padding":"20px"});    

    /* Moc pěkně se dá také pokazit třeba jen první prvek v seznamu. */
    // $("li:first-child").text("První propadne peklu").css({"color":"red"});
    /* Nebo i poslední: */    
    // $("li:last-child").text("A poslední jakbysmet").css({"color":"red"});
    /* A také každý sudý. Ten prvek seznamu s nelichým indexem, včetně 0. 
     * Metoda append() něco do prvku přidá:
     */
    // $("li:even").append("<mark>Ani sudý osudu neujde</mark>");
    /* A všechny liché rovnou zlikvidujeme, protože metoda remove() nic lepšího neumí: */
    // $("li:odd").remove();

    /* A na úplný závěr si ještě trochu zablbneme s animací. Selektor hvězdička totiž vládne všemu (aspoň na této stránce). 
     * Metoda animate() provádí změny atributů CSS v čase. Když ji zřetězíte, můžete dosáhnout různých divů:
     */
    // $("*").animate({left: '500px', top: '500px', opacity: 0.5}, 5000).animate({left: '0px', top: '0px', opacity: 1}, 5000);
    
    /* Domácí úkol: 
     * 1. Najděte na stránce tajné a velmi nebezpečné tlačítko.
     * 2. Doplňte do následující události co nejoriginálněji kód jQuery tak, aby se stránka po stisku tlačítka proměnila k nepoznání.
     * Využijte k tomu co nejvíce různých kouzelných triků - tedy rozličných selektorů i metod.
     * 3. Nejoriginálnější a nejpropracovanější kouzlo něco vyhraje :-) 
     * 4. Zcela objektivně vše zhodnotí komise ve složení já a nová paní učitelka, kterou vám příště na dálku představím...
     * 5. Hodně zdaru! :-)
     */
    $(".btn-danger").on("click", () => {
        $("button").text("Probíha ničení stránky")
        $("h1").text("Finsko").css({
            "background-color": "grey",
            "font-weight": "bold"
        });
        $("h2").css({
            "background-color": "grey",
            "font-weight": "bold"
        });
        $("h3").css({
            "color": "grey",
            "font-weight": "bold"
        });
        $("p").css({
            "font-weight": "bold",
            "font-size": "15px"
        });
        $("h2:eq(0)").text("Základní informace");
        $('nav').animate({bottom: '500'}, 450);
        $('nav').fadeOut(4500);
        $('header').animate({height: '130px'}, 4500);
        $('p').css('border', '10px solid grey');
        $('p').css('background-color', 'orange');
        $('main').hide(5000);
        $('main').animate({right: '120px'}, 1).show(4500);
        $('aside').fadeOut(2500).show(2500);
        $('aside').animate({left: '150px'}, 4500);
        $('div').animate({right: '350px', top: '305px'}, 4500).show(4500);
        //$('#smazat').remove();
        // $('#smazat').hide(500);
        $('button').fadeOut(4500);
        $('img').attr('src', 'img/Finland.png ');
        //$('img:eq(1)').remove();
        $('#prvniob').remove();
        $('#druhyob').remove();
        $('#poloha').html('	65° s. š., 27° v. d.')
        $('#nbod').html('Halti - 1328 m n. m.');
        $('#hlmesto').html('Helsinky');
        $('#rozloha').html('338 432 km<sup>2</sup>');
        $('#hdp').html('40 979 USD (23. na světě, 2015)')
        $('#prezident').html('Sauli Niinistö')
        $('#premier').html('Sanna Marinová')
        $('#mena').html('euro')
        $('#nazev').html('Ponicena stranka')
        $('#hustota').html('16,04 ob/km<sup>2</sup>');
        $('#pocetob').html('5 535 400');
        $('#jazyk').html('finština, švédština, laponština');
        $("footer").text("Zničeno Martinem Mikešem").css(
            {"text-align":"center"})
        $('#smazat').remove();
    });
})