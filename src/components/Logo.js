import React, { Component } from 'react'
import './Logo.css'

export default class Logo extends Component {
  static propTypes = {
    style: React.PropTypes.object,
    animationDisabled: React.PropTypes.bool
  }
  componentDidMount(){
    this._first = true
    setTimeout(()=>{
      this.forceUpdate()
    }, 600)
  }
  render(){
    //<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1={"494.6821"} y1="39.7505" x2="12.2761" y2="522.1566">
    if (!this._first){
      return (
        <svg style={this.props.style}/>
      )
    }
    const name = ['Logo', this.props.animationDisabled ? 'NoAnimation' : '']
      .filter(n=>n).join(' ')
    return (
      <svg className={name} x="0px" y="0px" style={this.props.style}
        width="504.326px" height="590.407px" viewBox="0 0 504.326 590.407" enableBackground="new 0 0 504.326 590.407">
        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1='494.4821' y1='39.7505' x2="12.2761" y2="522.1566">
          <stop offset="0" className='stop1' />
          <stop offset="1" className='stop2' />
        </linearGradient>
        <path className='main' fillRule="evenodd" clipRule="evenodd" fill="url(#SVGID_1_)" d="M252.271,414.939c25.862-6.705,46.612-13.705,66.511-22.769
          c12.756-6.711,15.903-8.234,24.941-15.929c-36.502,4.93-70.469,7.158-103.163-8.518c15.648,0,31.338,0.722,46.939-0.133
          c49.016-2.684,94.669-16.105,134.077-46.28c15.719-12.036,29.928-26.107,37.516-46.214
          c-74.495,41.441-151.617,65.807-232.539,43.243c27.891-3.235,60.428-4.851,92.023-11.165c49.1-9.812,95.603-27.392,133.341-62.034
          c32.666-29.987,55.964-76.656,51.961-121.922c-72.859,96.688-175.246,147.765-286.266,157.564
          c39.52-10.049,55.259-16.005,84.098-25.379c65.984-23.416,122.13-61.087,163.703-118.442c13.77-19,23.828-39.768,27.201-63.361
          c4.768-44.117-19.982-62.726-50.562-62.677c5.33,10.56,10.83,24.56,10.3,43.015c-1.469,17.502-9.626,29.796-18.276,44.6
          c-14.233,21.414-26.857,35.557-44.894,51.745c-0.966-11.3-2.05-20.3-5.465-31.277c-45.084,58.478-108.334,87.728-167.897,98.853
          c5.483-9.23,12.5-21.062,16.688-32.625c-39.188,7-99.501,26.334-144.7,57.387c1.075-7.137,3.075-11.637,7.565-18.615
          C46.535,242.252,18.813,273.5,19.037,327.767c-7.404-5.533-11.404-10.033-15.94-17.562c-4.076,17.298-4.242,32.316,0.185,47.177
          c5.244,17.604,17.769,28.795,33.752,37.062c22.604,11.681,46.986,14.339,72.406,14.704c-32.058-16.663-56.788-65.365-19.744-98.585
          c31.332-28.098,71.867-18.198,84.561,21.897c4.606,14.545,6.532,30.818,5.62,46.06c-2.082,34.73-14.611,66.477-36.061,93.9
          c-15.235,19.484-32.297,37.54-48.573,56.21c-2.269,2.598-4.704,5.053-7.063,7.579c9.989,0.917,31.992-2.129,41.926-4.636
          c-9.843,25.463-25.087,45.134-49.58,58.834c36.606-1.173,63.611-16.304,104.508-65.407c7.734,11.939,3.445,37.765-3.854,56.244
          c15.64-3.453,46.991-41.165,61.685-72.807C257.104,477.77,258.025,445.98,252.271,414.939z"/>
        <path className='second' fillRule="evenodd" clipRule="evenodd" fill="#6D6D6D" d="M252.347,164.694c-1.339,13.165-4.964,25.165-11.589,35.165
          c15-4,28.189-10.518,35.968-14.985c19.543-11.408,48.545-35.027,64.742-66.729c5.505-11.5,6.675-16.348,9.246-31.167
          c1.686-9.718,2.419-18.869,0.321-29.442c-18.741,23.219-34.467,45.981-59.413,60.147C310.433,79.058,332.689,40.83,295.995,0
          c-19.936,75.721-56.838,138.229-129.337,174.533C181.757,174.234,237.507,168.234,252.347,164.694z"/>
      </svg>
    )
  }
}

