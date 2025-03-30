document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('ascii-art');
    const text = `
                                                                                   
                                               &   &                                       
                                              &&   &&                                      
                                            &&&&   &&&&                                    
                                           &&&&&   &&&&&                                   
                                         &&&&&&&   &&&&&&&                                 
                                        &&&&&&&&   &&&&&&&&                                
                                      &&&&&&&&&&   &&&&&&&&&&                              
                                     &&&&&&&&&&&   &&&&&&&&&&&                             
                                    &&&&&&&&&&&&   &&&&&&&&&&&&                            
                                      &&&&&&&&&&   &&&&&&&&&&                              
                     &&&&&&&&&&&&&&&&  &&&&&&&&&   &&&&&&&&&  &&&&&&&&&&&&&&&&             
                        &&&&&&&&&&&&&&& &&&&&&&&   &&&&&&&& &&&&&&&&&&&&&&&                
                     &&&   &&&&&&&&&&&&& &&&&&&&   &&&&&&& &&&&&&&&&&&&&   &&&             
                      &&&&&  &&&&&&&&&&&&  &&&&&   &&&&&  &&&&&&&&&&&&  &&&&&              
                       &&&&&&&   &&&&&&&&&& &&&&   &&&& &&&&&&&&&&&  &&&&&&&               
                        &&&&&&&&&   &&&&&&&& &&&   &&& &&&&&&&&   &&&&&&&&&                
                         &&&&&&&&&&&&  &&&&&&  &   &  &&&&&&   &&&&&&&&&&&                 
                          &&&&&&&&&&&&&   &&&&       &&&&   &&&&&&&&&&&&&                  
                           &&&&&&&&&&&&&&&   &&&   &&&   &&&&&&&&&&&&&&&                   
                           &&&&&&&&&&&&&&&&&&         &&&&&&&&&&&&&&&&&&                   
                            &&&&&&&&&&&&&&&&&&&&   &&&&&&&&&&&&&&&&&&&&                    
                             &&&&&&&&&&&&&&&&&&&   &&&&&&&&&&&&&&&&&&&                     
                              &&&&&&&&&&&&&&&&&&   &&&&&&&&&&&&&&&&&&                      
                               &&&&&&&&&&&&&&&&&   &&&&&&&&&&&&&&&&&                       
                                &&&&&&&&&&&&&&&&   &&&&&&&&&&&&&&&&                        
                                 &&&&&&&&&&&&&&&   &&&&&&&&&&&&&&&                         
                                  &&&&&&&&&&&&&&   &&&&&&&&&&&&&&                          
                                   &&&&&&&&&&&&&   &&&&&&&&&&&&&                           
                                    &&&&&&&&&&&&   &&&&&&&&&&&&                            
                                    &&&&&&&&&&&&   &&&&&&&&&&&&                            
                                      &&&&&&&&&&   &&&&&&&&&&                              
                                      &&&&&&&&&&   &&&&&&&&&&                              
                                       &&&&&&&&&   &&&&&&&&&                               
                                        &&&&&&&&   &&&&&&&&                                
                                         &&&&&&&   &&&&&&&                                 
                                          &&&&&&   &&&&&&                                  
                                           &&&&&   &&&&&                                   
                                            &&&&   &&&&                                    
                                             &&&   &&&                                     
                                             &&&   &&&                                     
                                              &&   &&                                      
                                               &   &                                       
                                                                                   

        `;
    textElement.classList.remove('hidden');

    function displayFakeCode() {
        const fakeCodeElement = document.getElementById('fake-code');
        const fakeLines = [
            "Initializing system...",
            "Loading modules...",
            "Establishing connection...",
            "Fetching data...",
            "Data fetched.",
            "Establishing connection...",
            "Processing...",
            "Complete."
        ];

        let lineIndex = 0;
        
        function typeFakeLines() {
            if (lineIndex < fakeLines.length) {
                fakeCodeElement.innerText += fakeLines[lineIndex] + '\n';
                lineIndex++;
                setTimeout(typeFakeLines, 500); // Vitesse d'affichage des lignes de code
            } else {
                setTimeout(function() {
                    fakeCodeElement.innerText = ""; // Efface les lignes de faux code
                    displayLogo();
                }, 500); // Pause avant d'effacer et d'afficher le logo
            }
        }

        typeFakeLines();
    }

    function displayLogo() {
        const logoMusic = document.getElementById('logoMusic');
        logoMusic.play();
        
        textElement.innerText = text;
        textElement.style.opacity = 1; // Applique l'effet de fondu
        setTimeout(displayAdditionalText, 2000); // Pause avant d'afficher le texte supplémentaire
    }

    function displayAdditionalText() {
        const additionalTextElement = document.getElementById('additional-text');
        const additionalText = [
            "For assistance, type 'HELP'.",
            "Press [ESC] to exit."
        ];

        let textIndex = 0;
        additionalTextElement.classList.remove('hidden');
        
        function typeAdditionalText() {
            if (textIndex < additionalText.length) {
                additionalTextElement.innerHTML += highlightRed(additionalText[textIndex]) + '\n';
                textIndex++;
                setTimeout(typeAdditionalText, 1000); // Vitesse d'affichage du texte supplémentaire
            } else {
                showCommandInput(); // Affiche le champ de commande une fois que tout le texte est affiché
            }
        }

        typeAdditionalText();
    }

    function showCommandInput() {
        const inputElement = document.getElementById('commandInput');
        inputElement.classList.remove('hidden');
        inputElement.focus();
    }

    function highlightRed(text) {
        const wordsToHighlight = ["ERROR", "ALERT", "WARNING"];
        let highlightedText = text;

        wordsToHighlight.forEach(word => {
            const regex = new RegExp(`\\b${word}\\b`, 'g');
            highlightedText = highlightedText.replace(regex, `<span class='red'>${word}</span>`);
        });

        return highlightedText;
    }

    displayFakeCode();
});

const logs = [
    { name: "ENTRY-KRANICH-SYNTH-1.LOG", content: "Le conteneur SYNTHRA #KX-77315-02 en provenance de Synthra Dynamics sera temporairement entreposé en B-8. Merci de confirmer la réception et d'assurer la sécurisation du chargement conformément aux protocoles standards. En cas d’anomalie ou de demande de déplacement, merci de contacter le service logistique." },
    { name: "ENTRY-KRANICH-SYNTH-3.LOG", content: "Le conteneur SYNTHRA #KX-77315-04 a été affecté à la zone de stockage C-6. Veuillez vérifier son intégrité à l’arrivée et signaler toute anomalie. Un contrôle d’accès est requis pour toute manipulation du conteneur. Pour toute question, veuillez contacter la logistique." },
    { name: "ENTRY-KRANICH-KESS-TRANSPORT.LOG", content: "À compter de 22:00 ce soir, les opérateurs de Kessler Defense Services prendront en charge le transport de la cargaison prioritaire. L’ensemble du périmètre autour de la baie de chargement K sera strictement sécurisé jusqu'à la fin de l’opération. Tout accès non autorisé à cette zone sera considéré comme une violation grave des protocoles de sécurité et entraînera des sanctions immédiates, y compris des poursuites disciplinaires et pénales. Le personnel autorisé devra se présenter avec une identification valide et une accréditation de niveau 3 avant d’entrer dans la zone sécurisée. Pour toute question, contactez le service de sécurité." },
    { name: "ENTRY-KRANICH-ADMINI.LOG", content: "Nous rappelons à tous les employés que la consommation de nourriture et de boissons est strictement interdite dans les zones de stockage et de manutention. Suite aux récents incidents signalés (conteneurs souillés, emballages laissés à l’abandon), des inspections plus fréquentes seront mises en place. Toute infraction sera notifiée à la supervision logistique et pourra entraîner des sanctions disciplinaires. Des espaces dédiés sont disponibles dans la salle de repos (Bâtiment C, 2e étage). Merci de respecter ces consignes pour garantir la propreté et la conformité des installations." },
    { name: "ENTRY-KRANICH-PARAG.LOG", content: "Un chargement des Laboratoires Paragon a été réceptionné ce matin en A-5. Conformément aux instructions du contracteur, il est strictement interdit d’ouvrir ou d’inspecter le conteneur. Le contracteur n’a fourni aucune explication supplémentaire et a insisté pour que la cargaison soit stockée sans intervention de notre part. Tout manquement à cette directive pourrait entraîner des sanctions disciplinaires. Merci de vous assurer que l’accès à la zone reste limité au personnel autorisé."},
    { name: "ENTRY-KRANICH-KASAR.LOG", content: "Nous avons réceptionné une cargaison de filtres de purification (Réf. FL-920B) destinée à l’Unité de Traitement Atmosphérique. Les conteneurs sont stockés en A-1 et doivent être maintenus en position verticale pour éviter tout dommage. Précautions de stockage : Ne pas exposer aux solvants. Vérification du scellage hermétique avant expédition finale. Inspections prévues dans les 48h. Merci d'assurer le suivi avec l'équipe technique."},
    { name: "ENTRY-KRANICH-HALDR.LOG", content: "Les réactifs biologiques de classe 3 destinés aux Laboratoires Haldren ont été placés en zone C-7 sous conditionnement scellé. Instructions spécifiques : Transport réfrigéré maintenu à -5°C jusqu’au transfert final. Éviter toute exposition prolongée à l’air libre. Accès réservé aux techniciens agréés uniquement. En cas de fuite ou de détérioration, contacter immédiatement le service de sécurité. Merci de respecter le protocole."},
    // Ajoutez plus de logs si nécessaire
];

document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("commandInput");
    var terminalOutput = document.getElementById("terminalOutput");

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            handleCommand();
        }
    });
});

function handleCommand() {
    var input = document.getElementById("commandInput");
    var terminalOutput = document.getElementById("terminalOutput");
    var command = input.value.trim().toUpperCase();
    var commandOutput = "";

    if (command === "LIST LOGS") {
        commandOutput = "Available logs:\n";
        for (var i = 0; i < logs.length; i++) {
            commandOutput += "- " + logs[i].name + "\n";
        }
    } else if (command.startsWith("READ ")) {
        var fileName = command.substring(5).trim();
        var fileContent = logs.find(log => log.name === fileName)?.content;
        if (fileContent) {
            commandOutput = "Reading file: " + fileName + "\n" + wrapText(fileContent, 60);
        } else {
            commandOutput = "File not found: " + fileName;
        }
    } else if (command === "HELP") {
        commandOutput = "Main commands:\n";
        commandOutput += "- LIST LOGS : Lists available logs.\n";
        commandOutput += "- READ [FILENAME] : Reads the content of the specified log.\n";
        commandOutput += "- CLEAR : Clear the terminal screen.\n";
        commandOutput += "- INFO : Display information about this terminal.\n";
    } else if (command === "CLEAR") {
        terminalOutput.innerHTML = "";
        input.value = "";
        return; // Ne pas afficher le message "Unknown Command"
    } else if (command === "INFO") {
        commandOutput = "Terminal version 1.0. All systems operational.\n\n";
        commandOutput += "---------------------------------------------\n\n";
        commandOutput += "Session Owner: Derek Ramani\n\n";
        commandOutput += "User ID: ERICNEW547\n\n";
        commandOutput += "Clearance Level: 2\n\n";
    } else {
        commandOutput = "Unknown Command.";
    }

    // Affichez la sortie de la commande dans le terminal
    if (commandOutput) {
        terminalOutput.innerHTML += "<p>&gt; " + command + "</p>";
        terminalOutput.innerHTML += "<pre id='commandResult'>" + commandOutput + "</pre>";
    }

    // Effacez la saisie de l'utilisateur
    input.value = "";

    // Faites défiler jusqu'en bas du terminal
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function wrapText(text, maxLength) {
    var words = text.split(" ");
    var lines = [];
    var currentLine = "";

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (currentLine.length + word.length + 1 <= maxLength) {
            // Ajoute le mot à la ligne actuelle
            if (currentLine.length > 0) {
                currentLine += " ";
            }
            currentLine += word;
        } else {
            // La ligne actuelle est pleine, ajoutez-la aux lignes et commencez une nouvelle ligne
            lines.push(currentLine);
            currentLine = word;
        }
    }

    // Ajoutez la dernière ligne si elle n'est pas vide
    if (currentLine.length > 0) {
        lines.push(currentLine);
    }

    // Joindre les lignes en un seul texte avec des sauts de ligne
    return lines.join("\n");
}

