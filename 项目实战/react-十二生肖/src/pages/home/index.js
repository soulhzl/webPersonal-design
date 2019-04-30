import React, {
	PureComponent,
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Link
} from 'react-router-dom';
import TweenOne from 'rc-tween-one';
import {
	HomeWrapper,
	CarouselWrapper,
	CarouselNav,
	NavItem,
	CarouselPic,
	NewWrapper,
	NewTitle,
	NewpIC,
	ListItem,
	ListWrapper,
	ListContent
} from './style';
import {
	actionCreators
} from './store';

class Home extends PureComponent {

	initBgArea() {
		const {
			navList,
			selectedId,
			changeBg
		} = this.props;

		const newList = navList.toJS();

		const realList = [];

		if (newList.length) {
			for (var i = 0, len = newList.length; i < len; i++) {
				const bgSrc = newList[i].bgSrc;
				const listId = newList[i].id;
				const svgs = <Fragment><svg className='icon mar-left' aria-hidden='true' dangerouslySetInnerHTML={{__html: newList[i].svgFirst}}></svg><span className='describe'>{newList[i].text}</span>
						<svg className='icon' aria-hidden='true' dangerouslySetInnerHTML={{__html: newList[i].svgSecond}}></svg></Fragment>;
				if (selectedId !== (i + 1)) {
					realList.push(<NavItem key={newList[i].id} onClick={() => {changeBg(bgSrc, listId)}}>
						{ svgs }
						</NavItem>);
				} else {
					realList.push(<TweenOne key={newList[i].id} animation={{rotate: '360deg'}}><NavItem className='selected' onClick={() => {changeBg(bgSrc, listId)}}>
						{ svgs }
						</NavItem></TweenOne>);
				}
			}
		}

		return (<CarouselNav>{realList}</CarouselNav>);
	}

	componentDidMount() {
		this.props.initNav();
	}

	render() {

		const {
			carouselBg,
			selectedId
		} = this.props;

		return (<HomeWrapper>
		<NewWrapper>
		<NewTitle>
		十二生肖
		</NewTitle>
		<NewpIC src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546942445132&di=dacc4fab670e27e37c50957591a18221&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201502%2F13%2F20150213215756_Se4uV.jpeg' alt=''>
		</NewpIC>
		</NewWrapper>
		<CarouselWrapper>
		{ this.initBgArea() }
		<Link to={'/detail/' + selectedId}><CarouselPic src={carouselBg} alt=''></CarouselPic></Link>
		</CarouselWrapper>
		<ListWrapper>
		<ListItem>
		<ListContent>
		<h3>十二生肖</h3>
		<p>十二生肖，又叫属相，是中国与十二地支相配以人出生年份的十二种动物，包括鼠、牛、虎、兔、龙、蛇、马、羊、猴、鸡、狗、猪</p>
		</ListContent>
		<img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548051833&di=d029276fc8d475913e130216c2d6eaf1&imgtype=jpg&er=1&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180103%2F4831acd07b9e421db1a3a1602902730a.jpeg' alt=''/>
		</ListItem>
		</ListWrapper>
		</HomeWrapper>);
	}
}

const mapState = (state) => ({
	navList: state.getIn(['home', 'navList']),
	carouselBg: state.getIn(['home', 'carouselBg']),
	selectedId: state.getIn(['home', 'selectedId'])
});

const mapDispatch = (dispatch) => {
	return {
		initNav() {
			dispatch(actionCreators.getNavList());
		},

		changeBg(bgSrc, id) {
			dispatch(actionCreators.changeBg(bgSrc, id));
		}
	};
};

export default connect(mapState, mapDispatch)(Home);