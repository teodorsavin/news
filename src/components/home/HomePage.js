import React from 'react';
import { Accordion } from 'react-bootstrap';
import Article from '../articles/Article';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newsActions from '../../redux/actions/newsActions';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.actions.loadNews().catch(error => {
      alert('Loading News failed' + error);
    });
  }

  render() {
    console.log(this.props.news);
    if (this.props.news.articles !== undefined) {
      return (
        <div className="row">
          <Accordion defaultActiveKey="0">
            {this.props.news.articles.map(article => (
              <Article article={article}></Article>
            ))}
          </Accordion>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    news: state.news
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
