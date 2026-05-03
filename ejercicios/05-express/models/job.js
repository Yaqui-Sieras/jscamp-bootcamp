import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const jobsPath = join(__dirname, '..', 'jobs.json')
const jobs = JSON.parse(readFileSync(jobsPath, 'utf-8'))

export class JobModel {
  static async getAll({ text, title, level, limit = 10, technology, offset = 0 }) {
    let filteredJobs = jobs
    
    if (text) {
      const searchTerm = text.toLowerCase()
      filteredJobs = filteredJobs.filter(job =>
        job.titulo.toLowerCase().includes(searchTerm) || job.descripcion.toLowerCase().includes(searchTerm)
      )
    }

    if (title) {
      filteredJobs = filteredJobs.filter(job =>
        job.titulo.toLowerCase().includes(title.toLowerCase())
      )
    }

    if (level) {
      filteredJobs = filteredJobs.filter(job =>
        job.data.level?.toLowerCase() === level.toLowerCase()
      )
    }

    if (technology) {
      filteredJobs = filteredJobs.filter(job =>
        job.data.technology.includes(technology)
      )
    }

    const limitNumber = Number(limit) 
    const offsetNumber = Number(offset)

    const paginatedJobs = filteredJobs.slice(offsetNumber, offsetNumber + limitNumber)

    return paginatedJobs
  }

  static async getById(id) {
    const job = jobs.find(job => job.id === id)
    return job
  }

  static async create ({ titulo, empresa, ubicacion, data }) {
    const newJob = {
      id: crypto.randomUUID(),
      titulo,
      empresa,
      ubicacion,
      data
    }

    jobs.push(newJob)

    return newJob
  }

  static async update(id, { titulo, empresa, ubicacion, data }) {
    const index = jobs.findIndex(job => job.id === id)
    if (index === -1) return null

    jobs[index] = { ...jobs[index], titulo, empresa, ubicacion, data }
    return jobs[index]
  }

  static async partialUpdate(id, updates) {
    const index = jobs.findIndex(job => job.id === id)
    if (index === -1) return null

    jobs[index] = { ...jobs[index], ...updates }
    return jobs[index]
  }

  static async delete(id) {
    const index = jobs.findIndex(job => job.id === id)
    if (index === -1) return false

    jobs.splice(index, 1)
    return true
  }
}