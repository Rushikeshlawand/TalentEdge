import React, { useState } from "react";
import "../style/user-information-show-step6-1.css";

const CareerAssessment1 = () => {
  const NextPage = () => {
    window.location.href = "/user-information-show-step6-2";
  };
  const [progress] = useState(20);
  const [rangeValues, setRangeValues] = useState({
    range1: 10,
    range2: 10,
    range3: 10,
  });

  const handleRangeChange = (name, value) => {
    setRangeValues((prev) => ({ ...prev, [name]: parseInt(value) }));
  };

  return (
    <div className="layout-screen py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9 col-md-11 col-sm-12 col-12 mx-auto">
            <div className="layout-box px-5 py-3">
              <div className="logo d-flex justify-content-end">
                <img
                  src="https://cre.talentedge.com/img/upgrad-logo.svg"
                  alt="Logo"
                />
              </div>
              <div className="question-progress">
                <div className="progress-wrapper">
                  <div className="bar" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="completion-badge">
                  <div className="outer-counter">
                    <span className="count-wrap">
                      <small id="step_1">{progress}%</small>
                    </span>
                  </div>
                  Completed
                </div>
              </div>
              <div className="qest-title">
                <h3>Career Assessment 1 to 5</h3>
              </div>

              <input
                type="hidden"
                name="_token"
                value="vGOn6uZd5Xo194Khx4jw2HhgOrKLcUbzRh8k65lX"
              />
              <div className="form-data mt-4">
                <div className="quest-wrap">
                  <div className="inner-wrap bg-light p-3">
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <input type="hidden" name="step" value="1" />
                        <tbody>
                          {[
                            {
                              question:
                                "I am fully aware of the current job market trends and know what will be in demand over the next four to five years.",
                              rangeName: "range1",
                              questionId: 1,
                              value: rangeValues.range1,
                            },
                            {
                              question:
                                "I clearly know which skills I lack and how critical it is for me to acquire them to have a rewarding and bright career in the next 3 years.",
                              rangeName: "range2",
                              questionId: 2,
                              value: rangeValues.range2,
                            },
                            {
                              question:
                                "I am clear about the top five companies that I need to strive after to achieve my career aspirations.",
                              rangeName: "range3",
                              questionId: 3,
                              value: rangeValues.range3,
                            },
                          ].map(
                            (
                              { question, rangeName, questionId, value },
                              index
                            ) => (
                              <tr key={index}>
                                <td className="quest-width">{question}</td>
                                <td className="range-width">
                                  <div className="slider container-fluid">
                                    <div className="row align-items-center">
                                      <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-center">
                                        <p className="m-0 p-0">0</p>
                                        <p className="m-0 p-0">
                                          <span className="nall">Not at all</span>
                                        </p>
                                      </div>
                                      <input
                                        type="hidden"
                                        name="question_id[]"
                                        value={questionId}
                                      />
                                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <input
                                          type="range"
                                          min="0"
                                          max="10"
                                          value={value}
                                          name="user_response[]"
                                          aria-label={`Slider for question ${
                                            index + 1
                                          }`}
                                          onChange={(e) =>
                                            handleRangeChange(
                                              rangeName,
                                              e.target.value
                                            )
                                          }
                                        />
                                      </div>
                                      <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-center">
                                        <p className="m-0 p-0">{value}</p>
                                        <p className="m-0 p-0">
                                          <span>Absolutely</span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row my-5">
                  <div className="col-lg-4 col-md-5 col-sm-5 col-12">
                    <button
                      type="submit"
                      className="btn btn-danger"
                      onClick={NextPage}
                    >
                      Next <i className="fa fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAssessment1;
