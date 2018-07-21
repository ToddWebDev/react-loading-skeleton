# ☠️ react-loading-skeleton ☠️

Simple, animated loading placeholders that automatically adapt to the context of your app.

## Install
```
npm install react-loading-skeleton
```

## Basic Usage
```
import { Skeleton } from 'react-loading-skeleton-placeholders';

<Skeleton amount={5} />  //Simple, five line loading placeholder
<Skeleton amount={3} skull={true} />  //Circle and 3 line loading placeholder
```

##Principles
The `<Bone />` component is designed to be used directly in your components, in place of content while it is loading.  Using a `<Bone />` will ensure the loading state remains up-to-date with any changes to your layout or typography. The `<Skeleton />` component is designed to be used as a generic placeholder for body text.
```
class Article extends Component {
    render() {
        return (
            <div style={{fontSize: 20, lineHeight: 2}}>
                <h1>{this.props.title || <Bone />}</h1>
                {this.props.body || <Skeleton count={10}/>}
            </div>
        );
    }
}
```

## Spin up Dev Env

Clone this repo, install dependencies and use `npm start` to run project.

## Docs
Dig into the dirt and get to know the Skeleton with the documentation. 
[Component Documentation](http://toddwebdev.github.io/react-loading-skeleton/)


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Todd WebDev** - *Initial work* - [GitHub](https://github.com/ToddWebDev)

See also the list of [contributors](https://github.com/toddwebdev/react-loading-skeleton/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
