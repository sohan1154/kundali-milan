import React from 'react';
// import * as GlobalProvider from '../globals/globals';
import * as VarVadhuMilan from '../providers/globals/VarVadhuMilan';
import * as CustomValidators from '../providers/shared/validator';

class Matching extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            is_calculated: false,
            milan_result: {
                total: null,
                matched: null,
                love_percent: 0,
                message: null,
            },
            formData: {
                boy_name: null,
                girl_name: null
            },
            errors: {},
            loading: false,
        }
    }

    validateLoginForm = (e) => {

        let errors = {};

        if (CustomValidators.isEmpty(this.state.formData.boy_name)) {
            errors.boy_name = "कृपया लड़के का नाम भरे";
        }
        if (CustomValidators.isEmpty(this.state.formData.girl_name)) {
            errors.girl_name = "कृपया लड़की का नाम भरे";
        }

        if (CustomValidators.isEmpty(errors)) {
            return null;
        } else {
            return errors;
        }
    }

    handleChange = (event) => {

        const { target } = event;
        const value = target.value;
        const { name } = target;

        let formData = this.state.formData;

        formData[name] = value;

        // console.log("data:::::::::::",formData);

        this.setState({ formData: formData });
    }

    handleClick = (e) => {

        e.preventDefault();

        this.setState({ errors: {}, loading: true, is_calculated: false });

        let errors = this.validateLoginForm();

        if (!errors) {

            let result = VarVadhuMilan.milan(this.state.formData.boy_name, this.state.formData.girl_name)

            console.log('result:::', result)

            this.setState({ milan_result: result, loading: false, is_calculated: true });
        } else {
            this.setState({ errors: errors, loading: false, is_calculated: true });
        }
    };


    render() {

        return (

            <section id="service">
                <div className="container">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="heading">
                            <h2>KUNDALI MATCHMAKING</h2>
                            <div className="line" />
                            <p><span><strong>Vedic</strong></span> astrology suggests to check 36 Gun Milan by both names as both have impact on native's life. For example, if horoscope compatibility is not favorable by birth names, you can use prevalent names</p>
                        </div>
                    </div>
                    <div className="container">
                        <form className="row g-3 "  >
                            <div class="col-md-6">
                                <label className="form-label">Boy Name (लड़के का नाम)</label>
                                <input type="text" class="form-control" name="boy_name" defaultValue={this.state.formData.boy_name} placeholder="Boy Name (लड़के का नाम)" onKeyUp={this.handleChange} />
                                {this.state.errors.boy_name && <span className="error">{this.state.errors.boy_name}</span>}
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Girl Name (लड़की का नाम)</label>
                                <input type="text" class="form-control" name="girl_name" defaultValue={this.state.formData.girl_name} placeholder="Girl Name (लड़की का नाम)" onKeyUp={this.handleChange} />
                                {this.state.errors.girl_name && <span className="error">{this.state.errors.girl_name}</span>}
                            </div>
                            <div className="col-lg-12">
                                <button id="sbutton" type="button" className="btn btn-secondary btn-lg" onClick={this.handleClick} >Submit</button>
                            </div>
                        </form>
                    </div>

                    {this.state.is_calculated && <div className="experience">
                        <div className="col-lg-12 col-xs-12">
                            <div className="our-skills wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="single-skill wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="300ms">
                                    <p className="lead">वर-वधु कुंडली मेलापक</p>
                                    <p className="lead">कुल गुण: {this.state.milan_result.total}</p>
                                    <p className="lead">प्राप्त गुण: {this.state.milan_result.matched}</p>
                                    <div className="progress">
                                        <div className="progress-bar six-sec-ease-in-out" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={90} style={{ width: `${this.state.milan_result.love_percent}%` }}>{this.state.milan_result.love_percent + '%'}  </div>
                                    </div>
                                    <p className="lead" dangerouslySetInnerHTML={{ __html: this.state.milan_result.message }} />
                                </div>

                            </div>
                        </div>
                    </div>}

                </div>
            </section>
        );
    }
}
export default Matching;