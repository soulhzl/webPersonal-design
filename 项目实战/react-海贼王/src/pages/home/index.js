import React, { PureComponent, Fragment } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import { SectionWrapper, SectionOneBg, SectionOneFirstBg, SectionOneSecondBg, SectionOneThirdBg, SectionOneFourth, SectionOneFourthBg, SectionOneFourSonOne, SectionOneFourSonTwo, SectionOnefifthBg, SectionOnefifthSonBg, SectionTwoBg } from './style';

class Home extends PureComponent{
	render(){
		let options = {
			sectionClassName:     'section',
			anchors:              ['sectionOne', 'sectionTwo'],
			scrollBar:            false,
			navigation:           false,
		};
		return (
			<Fragment>
			<SectionsContainer {...options}>

			<Section className="custom-section">
			<SectionWrapper>
			<SectionOneBg>
			</SectionOneBg>
			<SectionOneFirstBg>
			</SectionOneFirstBg>
			<SectionOneSecondBg>
			</SectionOneSecondBg>
			<SectionOneThirdBg>
			</SectionOneThirdBg>
			<SectionOneFourth>
			<SectionOneFourthBg>
			</SectionOneFourthBg>
			<SectionOneFourSonOne>
			</SectionOneFourSonOne>
			<SectionOneFourSonTwo>
			</SectionOneFourSonTwo>
			</SectionOneFourth>
			<SectionOnefifthBg>
			<SectionOnefifthSonBg>
			</SectionOnefifthSonBg>
			</SectionOnefifthBg>
			</SectionWrapper>
			</Section>

			<Section>
			<SectionWrapper>
			<SectionTwoBg>
			</SectionTwoBg>
			</SectionWrapper>
			</Section>
			
			</SectionsContainer>
			</Fragment>
			);
	}
}

export default Home;