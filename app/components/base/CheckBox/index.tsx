/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react-native/no-unused-styles */
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';

export const LABEL_POSITION = {
  RIGHT: 'right',
  LEFT: 'left',
};

export class CircleCheckBox extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.string,
    outerSize: PropTypes.number,
    filterSize: PropTypes.number,
    innerSize: PropTypes.number,
    outerColor: PropTypes.string,
    filterColor: PropTypes.string,
    innerColor: PropTypes.string,
    onToggle: PropTypes.func.isRequired,
    labelPosition: PropTypes.oneOf([LABEL_POSITION.RIGHT, LABEL_POSITION.LEFT]),
    styleCheckboxContainer: ViewPropTypes.style,
    styleLabel: Text.propTypes.style,
  };

  static defaultProps = {
    checked: false,
    outerSize: 26,
    filterSize: 23,
    innerSize: 18,
    outerColor: '#FC9527',
    filterColor: '#FFF',
    innerColor: '#FC9527',
    label: '',
    labelPosition: LABEL_POSITION.RIGHT,
    styleLabel: {},
  };

  constructor(props) {
    super(props);
    const outerSize =
      parseInt(props.outerSize) < 10 || isNaN(parseInt(props.outerSize))
        ? 10
        : parseInt(props.outerSize);
    const filterSize =
      parseInt(props.filterSize) > outerSize + 3 ||
      isNaN(parseInt(props.filterSize))
        ? outerSize - 3
        : parseInt(props.filterSize);
    const innerSize =
      parseInt(props.innerSize) > filterSize + 5 ||
      isNaN(parseInt(props.innerSize))
        ? filterSize - 5
        : parseInt(props.innerSize);

    const customStyle = StyleSheet.create({
      _circleFilterStyle: {
        backgroundColor: props.filterColor,
        borderRadius: filterSize / 2,
        height: filterSize,
        width: filterSize,
      },
      _circleInnerStyle: {
        backgroundColor: props.innerColor,
        borderRadius: innerSize / 2,
        height: innerSize,
        width: innerSize,
      },
      _circleOuterStyle: {
        backgroundColor: props.outerColor,
        borderRadius: outerSize / 2,
        height: outerSize,
        width: outerSize,
      },
    });

    this.state = {
      customStyle: customStyle,
    };
  }

  _onToggle() {
    if (this.props.onToggle) {
      this.props.onToggle(!this.props.checked);
    }
  }

  _renderInner() {
    return this.props.checked ? (
      <View style={this.state.customStyle._circleInnerStyle} />
    ) : (
      <View />
    );
  }

  _renderLabel(position) {
    return this.props.label.length > 0 &&
      position === this.props.labelPosition ? (
      <Text style={[styles.checkBoxLabel, this.props.styleLabel]}>
        {this.props.label}
      </Text>
    ) : (
      <View />
    );
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onToggle.bind(this)}>
        <View
          style={[styles.checkBoxContainer, this.props.styleCheckboxContainer]}
        >
          {this._renderLabel(LABEL_POSITION.LEFT)}
          <View
            style={[
              styles.alignStyle,
              this.state.customStyle._circleOuterStyle,
            ]}
          >
            <View
              style={[
                styles.alignStyle,
                this.state.customStyle._circleFilterStyle,
              ]}
            >
              {this._renderInner()}
            </View>
          </View>
          {this._renderLabel(LABEL_POSITION.RIGHT)}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  alignStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkBoxLabel: {
    marginLeft: 5,
    marginRight: 5,
  },
});
