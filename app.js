const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.get('/bacheca', (req, res) => {
    const posts = [
        {
            title: "Ciambellone soffice della nonna",
            content: "Un classico intramontabile della tradizione italiana: il ciambellone soffice, profumato e perfetto per la colazione o la merenda. Preparato con ingredienti semplici e genuini, conquista tutti al primo morso.",
            img: "/ciambellone.jpeg",
            tags: [
                "#ciambellone", 
                "#dolcitradizionali", 
                "#colazioneitaliana", 
                "#ricettedellanonna", 
                "#soffice"
            ]
        },
        {
            title: "Cracker alla barbabietola croccanti",
            content: "Colorati, sani e irresistibilmente croccanti: i cracker alla barbabietola sono ideali per un aperitivo sfizioso o uno snack alternativo. Ottimi da gustare con creme e formaggi freschi.",
            img: "/cracker_barbabietola.jpeg",
            tags: [
                "#cracker", 
                "#barbabietola", 
                "#snacksano", 
                "#aperitivo", 
                "#ricettecreative"
            ]
        },
        {
            title: "Pane fritto dolce e zuccherato",
            content: "Fette di pane dorate e croccanti, passate nello zucchero per un dolce semplice e goloso. Una ricetta anti-spreco che richiama i sapori dell'infanzia.",
            img: "/pane_fritto_dolce.jpeg",
            tags: [
                "#panefritto", 
                "#dolcicasalinghi", 
                "#ricetteantispreco", 
                "#tradizione", 
                "#comfortfood"
            ]
        },
        {
            title: "Pasta alla barbabietola con pistacchi",
            content: "Un primo piatto scenografico e ricco di gusto: pasta alla barbabietola dal colore vivace, arricchita con pistacchi croccanti e note aromatiche. Perfetta per sorprendere gli ospiti.",
            img: "/pasta_barbabietola.jpeg",
            tags: [
                "#pastaitaliana", 
                "#barbabietola", 
                "#primiatti", 
                "#cucinacreativa", 
                "#pistacchi"
            ]
        },
        {
            title: "Torta paesana al cioccolato",
            content: "Un dolce rustico e intenso, preparato con pane raffermo, cacao e frutta secca. La torta paesana è una ricetta della tradizione lombarda che racchiude tutto il sapore di una volta.",
            img: "/torta_paesana.jpeg",
            tags: [
                "#tortapaesana", 
                "#dolcetradizionale", 
                "#cucinaitaliana", 
                "#cioccolato", 
                "#ricettediregione"
            ]
        }
    ];
    res.json(posts);
});

app.listen(port, () => {
    console.log(`the server is listening on port: ${port}`);
});