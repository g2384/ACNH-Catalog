import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { ArrowIosBackIcon } from '../../components/icons';
import ContentView from '../../layouts/articles/article-1';
import { AuthData } from './data';

export const Article1Screen = ({ navigation, route }): React.ReactElement => {

  const {params} = route;
  const index = params ? params.index : null;
  const data: AuthData[] = params ? params.data : null;

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.container}
      insets='top'>
      <TopNavigation
        title={data[index].Name}
        leftControl={renderBackAction()}
      />
      <ContentView/>
    </SafeAreaLayout>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
