import { Tabs } from 'expo-router';
import React from 'react';

import { Redirect } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function TabLayout() {
  const isLoaded = false;
console.log('isLoaded', isLoaded);
  return isLoaded ? (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  ) : (
    <Redirect href="/onboarding" />
  );
}
