const referenceData = {
    "Second": {
        title: "Second Conditional",
        description: "This is used to talk about a present or future hypothetical state or action and its hypothetical result in the present or future. We use this for things which we think are impossible or extremely unlikely.",
        exampleImage: "second_conditional.jpg",
        exampleText: "If I <strong class='highlighted green'>won</strong> the lottery, I <strong class='highlighted orange'>would buy</strong> a fast car.",
        form: "If + past, would + bare infinitive",
        furtherExamples: [
            {
                text: "If I <strong>saw</strong> a ghost, I <strong>would be</strong> very scared.",
                note: "action"
            },
            {
                text: "If he <strong>was</strong> ten years younger, he <strong>would travel</strong> around the world.",
                note: "state"
            }
        ]
    },
    "Third": {
        title: "Third Conditional",
        description: "",
        exampleImage: "",
        exampleText: "",
        form: "",
        furtherExamples: [
            {
                text: "If I <strong>saw</strong> a ghost, I <strong>would be</strong> very scared.",
                note: "action"
            },
            {
                text: "If he <strong>was</strong> ten years younger, he <strong>would travel</strong> around the world.",
                note: "state"
            }
        ]
    },
    "Mixed": {
        title: "Mixed Conditional",
        description: "",
        exampleImage: "",
        exampleText: "",
        form: "",
        furtherExamples: [
            {
                text: "If I <strong>saw</strong> a ghost, I <strong>would be</strong> very scared.",
                note: "action"
            },
            {
                text: "If he <strong>was</strong> ten years younger, he <strong>would travel</strong> around the world.",
                note: "state"
            }
        ]
    }
}

const getReferenceData = (type) => {
    return referenceData[type]
}

export { getReferenceData }