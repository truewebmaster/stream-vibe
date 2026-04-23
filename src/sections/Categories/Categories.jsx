import './Categories.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section";
import CategoryCard from '@/components/CategoryCard'
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";

const Categories = (props) => {
  const {
    className,
  } = props

  const categoryItems = [
    {
      title: 'Action',
      images: [
        '/src/assets/images/categories/action/1.jpg',
        '/src/assets/images/categories/action/2.jpg',
        '/src/assets/images/categories/action/3.jpg',
        '/src/assets/images/categories/action/4.jpg',
      ]
    },
    {
      title: 'Adventure',
      images: [
        '/src/assets/images/categories/action/1.jpg',
        '/src/assets/images/categories/action/2.jpg',
        '/src/assets/images/categories/action/3.jpg',
        '/src/assets/images/categories/action/4.jpg',
      ]
    },
    {
      title: 'Comedy',
      images: [
        '/src/assets/images/categories/action/1.jpg',
        '/src/assets/images/categories/action/2.jpg',
        '/src/assets/images/categories/action/3.jpg',
        '/src/assets/images/categories/action/4.jpg',
      ]
    },
    {
      title: 'Drama',
      images: [
        '/src/assets/images/categories/action/1.jpg',
        '/src/assets/images/categories/action/2.jpg',
        '/src/assets/images/categories/action/3.jpg',
        '/src/assets/images/categories/action/4.jpg',
      ]
    },
    {
      title: 'Horror',
      images: [
        '/src/assets/images/categories/action/1.jpg',
        '/src/assets/images/categories/action/2.jpg',
        '/src/assets/images/categories/action/3.jpg',
        '/src/assets/images/categories/action/4.jpg',
      ]
    },
  ]

  const sliderNavigationID = 'categories-slider-navigation'

  return (
    <Section
      title="Explore our wide variety of categories"
      titleID="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      isActionsHiddenOnMobile
      actions={(
        <SliderNavigation
          mode="tile"
          id={sliderNavigationID}
        />
      )}
    >
      <Slider
        navigationTargetElementId={sliderNavigationID}
      >
        {categoryItems.map((categoryItem, index) => (
          <CategoryCard
            {...categoryItem}
            key={index}
          />
        ))}
      </Slider>
    </Section>

  )
}

export default Categories