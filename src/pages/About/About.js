import React from 'react'
import './About.css'
import CustomTxt from '../../components/Atoms/CustomTxt/CustomTxt'
import AboutCardLong from '../../components/Molecules/AboutCardLong/AboutCardLong'
import AboutCardBox from '../../components/Molecules/AboutCardBox/AboutCardBox'
import {
    aboutCardLong,
    aboutCardBox,
    aboutServiceCreation,
} from './definitions'

export default function About() {
    return (
        <div className="About">
            <div className="container">
                {/* Block 1 */}
                <div className="About__block ">
                    <div className="About__title">
                        <CustomTxt
                            txtArr={aboutCardLong.title}
                            customCss={{
                                fontSize: '36px',
                                textTransform: 'uppercase',
                                fontWeight: 900,
                                textAlign: 'center',
                                paddingTop: '58px',
                            }}
                        />
                    </div>
                    <div className="About__content bg About__content-whyUs">
                        <div className="About__wrap">
                            {aboutCardLong.aboutCard.map((card, i) => (
                                <AboutCardLong
                                    key={card.id}
                                    card={card}
                                    position={card.id % 2 === 0 ? 1 : 0}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Block 2 */}
                <div className="About__block ">
                    <div className="About__title">
                        <CustomTxt
                            txtArr={aboutCardBox.title}
                            customCss={{
                                fontSize: '36px',
                                textTransform: 'uppercase',
                                fontWeight: 900,
                                textAlign: 'center',
                                paddingTop: '80px',
                            }}
                        />
                    </div>
                    <div className="About__content About__content-whyRent">
                        <div className="About__squarecards">
                            {aboutCardBox.aboutCard.map((card, i) => (
                                <AboutCardBox key={card.id} card={card} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Block 3 */}
                <div className="About__block About__block-paragraph">
                    <div className="About__title">
                        <CustomTxt
                            txtArr={aboutServiceCreation.title}
                            customCss={{
                                fontSize: '36px',
                                textTransform: 'uppercase',
                                fontWeight: 900,
                                textAlign: 'center',
                                paddingTop: '100px',
                                paddingBottom: '51px',
                            }}
                        />
                    </div>
                    <div className="About__paragraph">
                        <CustomTxt
                            txtArr={aboutServiceCreation.paragraph}
                            customCss={{
                                fontWeight: 800,
                                fontSize: '20px',
                                lineHeight: '30px',
                                textAlign: 'center',
                                maxWidth: '845px',
                                margin: 'auto',
                                paddingBottom: 110,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
