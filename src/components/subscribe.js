import addToMailchimp from 'gatsby-plugin-mailchimp'
import React from "react"
import ReactModal from 'react-modal'
import styled from "@emotion/styled"

ReactModal.setAppElement('#___gatsby')

const SubscribeContainer = styled.div`
    margin-bottom: 20px;
`

const SubscribeModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
`

export default class SubscribeComponent extends React.Component {
   state = {
       email: null,
       isModalOpen: false
   }

   _handleChange = (e) => {
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

  _handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await addToMailchimp(this.state.email)
        console.log("Add to mailchimp result", response);
        this.setState({ isModalOpen: true, modalText: response.msg });
    }
    catch(e) {
        console.log("Subscribe error", e);
    }
  }

  handleModalClose = () => {
      this.setState({ isModalOpen: false })
  }

  render () {
    return (
      <SubscribeContainer>
        <h1> Subscribe to our mailing list </h1>
        <form onSubmit={this._handleSubmit}>
          <div>
              <input
                  type="email"
                  onChange={this._handleChange}
                  placeholder="email"
                  name="email"
                  style={{marginBottom:"10px"}}
              />
          </div>
          <div>
            <input type="submit" value="Subscribe"/>
          </div>
        </form>
         <ReactModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Subscribe result"
          style={{content: {
              width: "700px",
              height: "200px",
              top: "40%",
              left: "30%"
          }}}
        >
          <SubscribeModalContent>
            <div dangerouslySetInnerHTML={{ __html: this.state.modalText }}></div>
              <button onClick={this.handleModalClose}>Close</button>
          </SubscribeModalContent>
        </ReactModal>
      </SubscribeContainer>
    )
  }
}
