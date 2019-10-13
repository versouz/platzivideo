import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';

import '../assets/styles/components/Player.scss';

const Player = props => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    props.getVideoSource(id);
    setLoading(false);
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button onClick={() => props.history.goBack()} type="submit">
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <Redirect to="/404/" />
  );
};

const mapStateToProps = state => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
