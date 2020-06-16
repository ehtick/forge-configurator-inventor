import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ModalProgressUpdate } from './modalProgressUpdate';
import { ModalProgressRfa } from './modalProgressRfa';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    title: "modal progress dialog title",
    label: "name of file in progress",
    icon: "Archive.svg"
};

describe('modal progress ', () => {

    it('should show message from props.label', () => {

        const wrapper = shallow(<ModalProgressUpdate {...props} />);

        const wrapperComponent = wrapper.find('.modalAction');
        const children = wrapperComponent.prop('children');

        expect(children).toHaveLength(2);
        expect(children[0].props['children']).toBe(props.label);
    });

    it('should show message that props.label is missing', () => {

        const propsNoTitle = { title: null };

        const wrapper = shallow(<ModalProgressUpdate {...propsNoTitle} />);

        const wrapperComponent = wrapper.find('.modalAction');
        const children = wrapperComponent.prop('children');

        expect(children).toHaveLength(2);
        expect(children[0].props['children']).toBe("Missing label.");
    });

    it('check Done button when specified download url', () => {

        const props = { url: "someUrl" };

        const wrapper = shallow(<ModalProgressRfa {...props} />);

        const button = wrapper.find('Button');
        expect(button.prop('title')).toBe('Done');
    });

    it('check that here is NO button available when not used download url', () => {

        const props = { url: null };

        const wrapper = shallow(<ModalProgressRfa {...props} />);

        const button = wrapper.find('Button');
        expect(button.length).toBe(0);
    });

});
