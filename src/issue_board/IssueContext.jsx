import React from 'react';

const IssueContext = React.createContext({
    "subject": "¿Cuál es su principal preocupación con respecto al problema de las fachadas y cubiertas?",
    "consensus": [
        {
            "share": 0.24,
            "top": ['Ya han visto que la fachada se está cayendo a pedazos en la torre 1?'],
            "polarity": -0.3,
            "tags": [{
                "tag": "riesgo",
                weight: 0.4
            },
            {
                tag: "enfermedad",
                weight: 0.2
            },
            {
                tag: "enfermedad",
                weight: 0.2
            }]
        },
        {
            "share": 0.20,
            "top": ['Es mucha plata para pagar!, nadie tiene tanto dinero 🤣'],
            "polarity": -0.1,
            "tags": [{
                "tag": "dinero",
                weight: 0.4
            },
            {
                tag: "cuota",
                weight: 0.2
            }]
        },
        {
            "share": 0.12,
            "top": ['Hay que preocuparse cuando sea imposible recoger la plata'],
            "polarity": 0.7,
            "tags": [{
                "tag": "corrupción",
                weight: 0.4
            },
            {
                tag: "indiferencia",
                weight: 0.2
            }]
        }
    ]
});

export default IssueContext;
