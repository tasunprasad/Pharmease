// CheckBox.tsx
import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {SvgXml} from 'react-native-svg';

export interface CheckBoxProps {
  name: string;
  control: Control<any>;
  label?: string | JSX.Element;
  containerStyles?: StyleProp<ViewStyle>;
  labelStyles?: StyleProp<TextStyle>;
  checkboxStyles?: StyleProp<ViewStyle>;
  checkboxCheckedStyles?: StyleProp<ViewStyle>;
  checkboxCheckMarkStyles?: StyleProp<ViewStyle>;
  checkIcon?: JSX.Element;
  onChange?: (value: boolean) => void;
}

const icon =
  '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>';

const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  control,
  label,
  containerStyles,
  labelStyles,
  checkboxStyles,
  checkboxCheckedStyles,
  checkboxCheckMarkStyles,
  checkIcon,
  onChange,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange: fieldOnChange, value}}) => (
        <TouchableOpacity
          onPress={() => {
            fieldOnChange(!value);
            onChange && onChange(!value);
          }}
          style={[defaultStyles.container, containerStyles]}>
          <View
            style={[
              defaultStyles.checkbox,
              checkboxStyles,
              value && checkboxCheckedStyles,
            ]}>
            {value && (
              <View
                style={[
                  defaultStyles.checkboxCheckMark,
                  checkboxCheckMarkStyles,
                ]}>
                {checkIcon ? (
                  checkIcon
                ) : (
                  <SvgXml
                    xml={icon}
                    color={'white'}
                    height={12}
                    strokeWidth={4}
                  />
                )}
              </View>
            )}
          </View>
          {label && (
            <Text style={[defaultStyles.label, labelStyles]}>{label}</Text>
          )}
        </TouchableOpacity>
      )}
    />
  );
};

const defaultStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  label: {
    marginLeft: 8,
    fontFamily: 'Manrope-Medium',
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#5626E1',
    borderRadius: 5,
  },
  checkboxChecked: {
    borderColor: '#5626E1',
  },
  checkboxCheckMark: {
    width: 16,
    height: 17,
    borderRadius: 3,
    backgroundColor: '#5626E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CheckBox;
