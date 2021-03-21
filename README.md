## Tripp it uppppp

#### *Installation*

To browser
1. git clone && cd into folder
2. npm i
3. ionic serve



To a android device
... prev steps 
1. ionic build
2. npx cap copy
3. npx cap open android

or 

1. ionic cap build android

<br>
<br>
<br>

`ionic build` vs `ionic cap build`

```shell
$ ionic build [options]
```
`ionic build` will perform an Ionic build, which compiles web assets and prepares them for deployment. 

[More details](https://ionicframework.com/docs/cli/commands/build)


```shell
$ ionic cap build <platform> [options]
```
`ionic cap build` will do the following:

- Perform ionic build
- Copy web assets into the specified native platform
- Open the IDE for your native project (Xcode for iOS, Android Studio for Android)

Once the web assets and configuration are copied into your native project, you can build your app using the native IDE. Unfortunately, programmatically building the native project is not yet supported. 

[More details](https://ionicframework.com/docs/cli/commands/capacitor-build)


