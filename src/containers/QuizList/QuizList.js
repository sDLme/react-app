import React, {useEffect} from 'react'
import classes from './QuizList.css'
import {NavLink} from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
import {connect} from 'react-redux'
import {fetchQuizes} from '../../store/actions/quiz';

const QuizList = props => {

 const renderQuizes = () => {
    return props.quizes.map(quiz => {
      return (
        <li
          key={quiz.id}
        >
          <NavLink to={'/quiz/' + quiz.id}>
            {quiz.name}
          </NavLink>
        </li>
      )
    })
  }

  useEffect(() => {
    props.fetchQuizes()
  },[])
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Quiz list</h1>

          {
            props.loading && props.quizes.length !== 0
              ? <Loader />
              : <ul>
                  { renderQuizes() }
                </ul>
          }

        </div>
      </div>
    )
  
}

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)