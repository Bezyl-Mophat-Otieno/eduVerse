import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imageSource from '../../../../public/images/expertise.jpg'
import Course from '@/components/Course'

function index() {
  return (
    <div>

        <section id="four" class="wrapper alt style1">
            <div class="inner">
                <h2 class="major">Courses Registered</h2>
                <section class="features">
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                </section>
                <ul class="actions">
                    <li><a href="#" class="button">Browse All</a></li>
                </ul>
            </div>
        </section>

      
    </div>
  )
}

export default index
