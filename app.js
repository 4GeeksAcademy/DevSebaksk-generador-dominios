let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extencion =[".com", ".net", ".us", ".io"];
        pronoun.forEach(pronounElement => {
            adj.forEach(adjElement => {
                noun.forEach(nounElement => {
                    extencion.forEach(extencionElement => {
                        console.log(pronounElement+adjElement+nounElement+extencionElement);
                    });
                });
            });
        });
