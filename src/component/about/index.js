import React from 'react'
import Typist from 'react-typist'
import UserDialogue from '../user-dialogue/index.js'
import './styles.scss'

export default class About extends React.Component{
  constructor(props){
    super(props)
    this.state={
      choice: 0,
      considering: null,
      answerText: '',
      stringIndex: 0,
      userPortrait: '',
    }
    this.delayedText = this.delayedText.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.handleChoice = this.handleChoice.bind(this)
  }

  componentWillMount(){
    if(!this.state.userPortrait && localStorage.userPortrait){
      this.setState({
        userPortrait: JSON.parse(localStorage.getItem('userPortrait')),
      })
    }
  }

  handleChoice(choice){
    this.setState({
      choice: choice,
    })
    // let answer = choice === 1 ? 'Hello world'
    //   : choice === 2 ? 'Oh my'
    //   : choice === 3 ? 'Aw yeah'
    //   : choice === 4 ? 'I like turtles'
    //   : ''
    //
    //   this.delayedText('Hello World')
  }

  handleHover(choice){
    this.setState({
      considering: choice
    })
  }

  delayedText(text){
    if(this.state.stringIndex === (text.length - 1)){
      this.setState({
        stringIndex: 0
      })
    }
    // let loopThroughSplittedText = (text) => {

    // Create our counter; delayedOutput will use this to
    // track how far along in our string we are currently at
    // let locationInString = 0

    // function delayedOutput() {

    // Output the next letter in our string
    // console.log(splittedText[locationInString]);
    this.setState({
      answerText: text[this.state.stringIndex]
    })

    // Increment our counter so that on the next call we are on the next letter
    this.setState(prevState => {
      stringIndex: prevState.stringIndex++
    })

    // Only perform setTimeout if we still have text left to output
    if (this.state.stringIndex < text.length) {

      // Functions can reference themselves using their own name
      setTimeout(this.delayedText, 20)
    }


  // Call our function once to get things started
  this.delayedText(text)


    // loopThroughSplittedText(splittedText)
  }

  render() {
    // let picture = require(this.state.userPortrait)
    // let userPortrait = {
    //   backgroundImage: `url(${picture})`,
    // }

    let userPic = {
      backgroundImage: 'url(' + `${this.state.userPortrait}` + ')',
    }

    return(
      <div className='about-main'>



        <div className='user-dialogue box'>

          <div className='portrait-block'></div>

          <UserDialogue
            componentClass={'choice-1'}
            choice={this.handleChoice}
            hover={this.handleHover}
            considering={this.state.considering}
            optionNumber={1}
            text={'Tell me a bit about yourself.'}
          />

          <UserDialogue
            componentClass={'choice-2'}
            choice={this.handleChoice}
            hover={this.handleHover}
            considering={this.state.considering}
            optionNumber={2}
            text={'What do you like about programming?'}
          />

          <UserDialogue
            componentClass={'choice-3'}
            choice={this.handleChoice}
            hover={this.handleHover}
            considering={this.state.considering}
            optionNumber={3}
            text={'What languages do you program in?'}
          />

          <UserDialogue
            componentClass={'choice-4'}
            choice={this.handleChoice}
            hover={this.handleHover}
            considering={this.state.considering}
            optionNumber={4}
            text={'Where do you see yourself in five years?'}
          />

        </div>

        <div className='user-name'>{localStorage.getItem('userName')}</div>

        <div className='user-portrait' style={userPic}></div>

        <div className='matt-dialogue box'>

          <div className='answer'>

            {this.state.choice === 0 ?
              <Typist startDelay={1500} avgTypingDelay={25} stdTypingDelay={0} cursor={{show: false}}>
                {`Hi ${localStorage.getItem('userName')}, it's a pleasure to meet you! Welcome to my site. Feel free to ask me any questions you might have.`}
              </Typist>
              : undefined
            }

            {this.state.choice === 1 ?
              <Typist startDelay={200} avgTypingDelay={25} stdTypingDelay={0} cursor={{show:false}}>
              {`My name's Matthew Parker. I'm a graduate of Code Fellows in Seattle, a full-stack JavaScript developer, and a Christian. Reading, adventures, and animals are a few of my favorite things. I aspire to be both a master programmer and best-selling author.`}
              </Typist>
              : undefined
            }
            {this.state.choice === 2 ?
              <Typist startDelay={200} avgTypingDelay={25} stdTypingDelay={0} cursor={{show: false}}>
              {`I love to create, through both writing and programming. There's nothing to me quite like imagining a thing, and then creating it with words. And with programming I can make things that genuinely impact the way people live. It's really amazing, and drives me to pursue excellence.`}
              </Typist>
              : undefined
            }
            {this.state.choice === 3 ?
              <Typist startDelay={200} avgTypingDelay={25} stdTypingDelay={0} cursor={{show: false}}>
              {`I specialize in JavaScript with a focus on the front-end with React, and have an array of skills such as HTML5, CSS3, Sass, Redux, Node, MongoDB, AWS, and others. I love learning new languages!`}
              </Typist>
              : undefined
            }
            {this.state.choice === 4 ?
              <Typist startDelay={200} avgTypingDelay={25} stdTypingDelay={0} cursor={{show: false}}>
              {`I hope by then to be wiser, more charitable, a senior-level programmer with a great company, and a published author.`}
              </Typist>
              : undefined
            }
          </div>
          <div className='portrait-block'></div>
        </div>
        <div className='matt-portrait'></div>
        <div className='matt-name'>Matthew</div>


      </div>
    )
  }
}
