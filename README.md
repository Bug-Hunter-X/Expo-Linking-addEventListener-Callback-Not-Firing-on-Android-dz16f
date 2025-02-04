# Expo Linking.addEventListener Callback Not Firing on Android

This repository demonstrates a bug where the `Linking.addEventListener` callback in Expo's Linking API does not fire on Android devices when a deep link is opened.  The issue is particularly noticeable when the deep link is opened from outside the app, such as a web browser or another application.

## Problem Description:

The `Linking.addEventListener` function is correctly registered to listen for URL changes. However, the provided callback function never executes, even when the app is successfully opened using a deep link. This hinders the app's ability to handle deep links as intended.

## Steps to Reproduce:

1. Clone this repository.
2. Run the app on an Android device or emulator.
3. Open a deep link URL (e.g., `myapp://somepath`).
4. Observe that the `Linking.addEventListener` callback function does not log any information to the console.

## Proposed Solution:

The solution involves ensuring the `Linking.addEventListener` function is registered correctly within the app's lifecycle, ideally within `componentDidMount` of the main application component. We also need to thoroughly check Android Manifest configurations for deep-link handling. A potential cause can be related to the way the background tasks are handled on the device and within the Expo environment. To address this, we should add checks to ensure the app is properly resuming and then attempt to get the initial URL.