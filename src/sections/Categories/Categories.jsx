import './Categories.scss'
import Section from "@/layouts/Section"
import CategoryCard from '@/components/CategoryCard'
import Slider from "@/components/Slider"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import categoryItems from "./categoryItems"

const Categories = () => {

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
        isBeyondTheViewportOnMobileS
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