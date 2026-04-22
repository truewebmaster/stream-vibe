import './Categories.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section";

const Categories = (props) => {
  const {
    className,
  } = props

  return (
    <Section
      title="Explore our wide variety of categories"
      titleID="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      isActionsHiddenOnMobile
      actions={(
        <div>
          <button>Назал</button>
          <button>Вперёд</button>
        </div>
      )}
    >
      CATEGORIES
    </Section>

  )
}

export default Categories