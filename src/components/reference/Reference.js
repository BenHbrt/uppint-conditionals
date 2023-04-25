import './Reference.scss';
import { getReferenceData } from '../../data/referenceData';

import Button from '../Button'


const Reference = ({ reference, setReference }) => {

    const data = getReferenceData(reference)

    return (
        <div className='reference'>
            <div className="reference_buttons">
                <Button name="Second" display={reference} func={() => setReference("Second")} />
                <Button name="Third" display={reference} func={() => setReference("Third")} />
                <Button name="Mixed" display={reference} func={() => setReference("Mixed")} />
            </div>
            <div className="reference_title">{data.title}</div>
            <div className="reference_description">{data.description}</div>
            <div className="reference_example">
                <img src={require(`../../images/reference/${data.exampleImage}`)} alt={data.title + " timeline"} />
                <div dangerouslySetInnerHTML={{__html: data.exampleText}}></div>
                <div className="reference_example_form">{data.form}</div>
            </div>
            <div className="reference_further">
                <div className="reference_further_title">Further examples:</div>
                {
                    data.furtherExamples.map((example) => {
                        return <div className="reference_further_example"><span dangerouslySetInnerHTML={{__html: example.text}}></span> <i>(<span>{example.note}</span>)</i></div>
                    })
                }
            </div>
            <div className="reference_note"><i>Note: <strong>Would</strong> can be replaced by <strong>might</strong> to indicate hypothetical possibility and by <strong>could</strong> to indicate hypothetical ability.</i></div>
        </div>
    )
}

export default Reference;